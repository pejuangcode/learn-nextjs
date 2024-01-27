export default function Page({ params }: { params: { slug: string } }) {
    return <div>My df Post: {params.slug}</div>
  }