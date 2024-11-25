
function Podcast() {
  return (
    <section id="podcast" className="h-screen flex items-center"> 
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="mt-12">
          <iframe src="https://open.spotify.com/embed/episode/5KwmUkmniqbyVS6F42hiFD/video?utm_source=generator" width="624" height="351" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>            </div>
            <div className="max-w-lg">
              <div className="text-2xl">Podcast</div>
              <p className="mt-4 text-white text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                    eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                    Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                    malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Podcast