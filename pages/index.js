import Head from 'next/head'

function Blog({ repos, author }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
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
       dreamers come to learn their crafts. Creating extraordinary things with <span className="hover:text-green-500 ">Science</span>, <span className="hover:text-blue-500">Technology</span>, <span className="hover:text-red-500">Engineering</span>, and <span className="hover:text-yellow-500">Math</span>, . While also solving amazing problems, all as a <span className="hover:text-yellow-500">Community</span>!</p>
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