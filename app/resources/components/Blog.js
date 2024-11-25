function Blog() {
  return (
<section id="blog">
    <div class="py-8 px-4 mx-auto max-w-screen-xl">
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
    <h2 class="mb-4 text-3xl  tracking-tight font-extrabold text-white ">Blog</h2>
    <p class="font-light text-gray-500 sm:text-xl">Lorem ipsun dolor sit amet, consectetur adipiscing elit.</p>
    </div> 
    <div class="grid gap-8 lg:grid-cols-2">

        <article class="p-6 bg-[#F24B04] rounded-lg border border-gray-200 shadow-md ">
        <div class="flex justify-between items-center mb-5 text-gray-500">
        <span class="text-sm">14 days ago</span>
        </div>
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-white"><a href="#">Lorem ipsun dolor sit amet</a></h2>
        <p class="mb-5 font-light text-white">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus fusce finibus vitae vehicula venenatis primis curae. 
        Commodo netus vivamus scelerisque platea, hac nunc tincidunt luctus. 
        Facilisis finibus nulla.
        </p>
        <div class="flex justify-between items-center">
        <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
        Leer más
        <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        </div>
        </article>   

        <article class="p-6 bg-[#F24B04] rounded-lg border border-gray-200 shadow-md ">
        <div class="flex justify-between items-center mb-5 text-gray-500">
        <span class="text-sm">14 days ago</span>
        </div>
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-white"><a href="#">Lorem ipsun dolor sit amet</a></h2>
        <p class="mb-5 font-light text-white">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus fusce finibus vitae vehicula venenatis primis curae. 
        Commodo netus vivamus scelerisque platea, hac nunc tincidunt luctus. 
        Facilisis finibus nulla.
        </p>
        <div class="flex justify-between items-center">
        <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
        Leer más
        <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        </div>
        </article>                   
    </div>  
    </div>
</section>
  )
}

export default Blog