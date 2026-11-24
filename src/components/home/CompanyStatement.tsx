import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import StockTickerList, { type StockRow } from "@/components/home/StockTickerList";

type StockPrice = {
  exchangeName: string;
  lastPrice: number;
  movement: number;
  movementPercent: number;
  tradedDateTime: string;
  symbol: string;
  currency: string;
};

// South32 API blocks datacenter/server requests (403 Cloudflare).
// These values are the last known response, used when the API is unreachable.
const FALLBACK_STOCK_PRICES: StockPrice[] = [
  {
    exchangeName: "ASX",
    lastPrice: 4.61,
    movement: -0.08,
    movementPercent: -1.71,
    tradedDateTime: "2015-05-18T06:00:00",
    symbol: "S32",
    currency: "AUD",
  },
  {
    exchangeName: "LSE",
    lastPrice: 2.39,
    movement: 0.06,
    movementPercent: 2.75,
    tradedDateTime: "2015-05-18T16:15:00",
    symbol: "S32",
    currency: "GBP",
  },
  {
    exchangeName: "JSE",
    lastPrice: 51.99,
    movement: 0.79,
    movementPercent: 1.54,
    tradedDateTime: "2015-05-18T15:00:00",
    symbol: "S32",
    currency: "ZAR",
  },
];

async function getStockPrices(): Promise<StockPrice[]> {
  try {
    const res = await fetch("https://www.south32.net/api/stockprice", {
      next: { revalidate: 300 },
    });
    if (!res.ok) return FALLBACK_STOCK_PRICES;
    const data = (await res.json()) as { stockPrices?: StockPrice[] };
    return Array.isArray(data.stockPrices) && data.stockPrices.length
      ? data.stockPrices
      : FALLBACK_STOCK_PRICES;
  } catch {
    return FALLBACK_STOCK_PRICES;
  }
}

const priceFmt = (value: number, currency: string) =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency,
    currencyDisplay: "code",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

const signedFmt = (value: number, suffix = "") =>
  `${new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: "exceptZero",
  }).format(value)}${suffix}`;

const dateFmt = (iso: string) =>
  new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));

async function StockTicker() {
  const stockPrices = await getStockPrices();

  const rows: StockRow[] = stockPrices.map((sp) => {
    const down = sp.movement < 0 || sp.movementPercent < 0;
    return {
      id: `${sp.exchangeName}-${sp.tradedDateTime}`,
      exchange: sp.exchangeName,
      symbol: sp.symbol,
      price: priceFmt(sp.lastPrice, sp.currency),
      movement: signedFmt(sp.movement),
      percent: signedFmt(sp.movementPercent, "%"),
      down,
      date: dateFmt(sp.tradedDateTime),
    };
  });

  return <StockTickerList rows={rows} />;
}

export default function CompanyStatement() {
  return (
    <section id="kesif" className="border-t border-hairline bg-paper">
      <Suspense fallback={null}>
        <StockTicker />
      </Suspense>
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-24 pt-12 md:pb-28 md:pt-14 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-7">
          <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold tracking-[-0.03em] text-ink">
            KIMERIS MADEN&rsquo;i Tanıyın
          </h2>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted">
            KIMERIS MADEN&rsquo;in faaliyet alanlarını, çalışma yaklaşımını ve
            kurumsal yapısını bu bölümde bulabilirsiniz. Projelerimizle ilgili
            teknik ve güncel bilgilere ilgili sayfalardan ulaşabilirsiniz.
          </p>
          <div className="mt-9">
            <Link href="/about" className="link-quiet">
              Kurumsal bilgileri görün
            </Link>
          </div>
        </div>
        <figure className="lg:col-span-5">
          <Image
            src="/minning.webp"
            alt="Elde tutulan cam küre içinde maden ve mineral örnekleri"
            width={2400}
            height={1792}
            sizes="(min-width: 1024px) 40vw, 92vw"
            className="h-auto w-full rounded-md border border-hairline"
          />
        </figure>
      </div>
    </section>
  );
}
