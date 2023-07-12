// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export function generateStaticParams() {
    return [
      { category: 'a', product: '1' },
      { category: 'b', product: '2' },
      { category: 'c', product: '3' },
    ]
  }

export default function Page({ params }: { params: { category: string; product: string } }) {
    return <div>My category: {params.category}, My product: {params.product}</div>
  }