import Cards from '@/components/Cards/Cards'

export default function Service() {
  return (
    <section id="service" className="flex flex-col gap-4 pb-28 pt-28">
      <div className="md:container md:mx-auto">
        <h2 className="mb-6 text-center text-3xl">Услуги</h2>
        <div className="h-1 w-full mx-auto border-b my-5"></div>
        <div className="flex flex-wrap justify-center">
          <Cards />
        </div>
      </div>
    </section>
  )
}
