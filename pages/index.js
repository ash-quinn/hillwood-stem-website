import Head from 'next/head'

function Blog({ repos, author }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Hillwood STEM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-5xl text-6xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 animate-bounce	">Hillwood High <span className="text-green-400">S</span><span className="text-blue-400">T</span><span className="text-red-400">E</span><span className="text-yellow-400">M</span></h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto text-xl leading-relaxed ">Where {" "} 
      <span className="hover:text-green-500	">c</span>
      <span className="hover:text-red-500	">r</span>
      <span className="hover:text-blue-500 ">e</span>
      <span className="hover:text-yellow-500 	">a</span>
      <span className="hover:text-green-600 ">t</span>
      <span className="hover:text-red-600 ">i</span>
      <span className="hover:text-blue-600 	">v</span>
      <span className="hover:text-yellow-600 	">e</span> {" "}
       dreamers come to learn their crafts. Creating extraordinary things with <span className="hover:text-green-200 text-green-500 font-bold">Science</span>, <span className="hover:text-blue-200 text-blue-500 font-bold">Technology</span>, <span className="hover:text-red-200 text-red-500 font-bold">Engineering</span>, and <span className="hover:text-yellow-200 text-yellow-500 font-bold">Math</span>, . While also solving amazing problems, all as a <span className="hover:text-yellow-500">Community</span>!</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block animate-pulse" src="https://dummyimage.com/600x360" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block animate-pulse" src="https://dummyimage.com/601x361" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block " src="https://dummyimage.com/503x303" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Read our Blog!</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Our blog is a place where all of our blog posts live, a place to see what exactly we do in this STEM class. This includes Engineering, Robotics, and ART</p>
    </div>
    <div className="flex flex-wrap -m-4">


      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100  hover:bg-gray-50 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>



      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 hover:bg-gray-50 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 hover:bg-gray-50 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 hover:bg-gray-50 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section> */}



      {/* <footer className="flex items-center justify-center w-full h-10 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Linux
        </a>
      </footer> */}
    </div>
  )}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://api.github.com/users/Hillwood-High-Robotics/repos')
  const repos = await res.json()

  const res2 = await fetch('https://api.github.com/users/Hillwood-High-Robotics')
  const author = await res2.json()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      repos,
      author
    },
  }
}

export default Blog
