const loadData = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`
  )
  const data = await response.json()
  const allData = data.data.news_category
//   console.log(allData)
  const categoryBarContainer = document.getElementById('categoryBarContainer')
  allData.forEach((item) =>{
    // console.log(item)
    const div = document.createElement('div')
    div.classList = 'hover:text-[#0d0f99]'
    div.innerHTML = `
    <button onclick = "newsData('${item?.category_id}')">${item.category_name}</button>
    `
    categoryBarContainer.appendChild(div)
  })
};

const newsData = async(catId) =>{
    // console.log(catId)

    // show spinner
    document.getElementById('spinnerContainer').classList.remove('hidden');

    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`)
    const data = await res.json()
    const allItem = data.data
    // console.log(allItem)
    
    const newsContainer = document.getElementById('newsContainer')
    newsContainer.innerHTML = ''
    allItem.forEach((item) =>{
      // hide spinner
        document.getElementById('spinnerContainer').classList.add('hidden');

        console.log(item)
        const div = document.createElement('div')
        div.classList ="flex flex-col md:flex-row justify-between items-center rounded-lg shadow-xl my-10"
        div.innerHTML = `
                <div id="newsPhoto" class='w-full lg:w-3/4 lg:h-2/3'>
                    <img class='' src="${item?.thumbnail_url}" alt="">
                </div>
                <div id="newsInfo" class='p-5 '>
                    <div id="newsHeader" class ="flex flex-col md:flex-row justify-between items-center py-5">
                        <h4 class='font-bold text-xl pl-2 pr-5'>${item?.title}</h4>
                        <p id="newsBadge" class='flex items-center gap-2 py-2'>
                        ${item?.rating?.badge}
                        <sup>${item?.rating?.number}</sup>
                        </p>
                    </div>
                    <p class='p-2'>${item?.details.slice(0,200)}</p>
                    <div id="newsFooter" class ='flex justify-between items-center py-5'>
                        <div id="author" class='flex flex-col md:flex-row justify-around items-center gap-2'>
                            <div class='w-10'>
                                <img class='rounded-full' src="${item?.author?.img}" alt="">
                            </div>
                            <div id="authorInfo" class='text-center md:text-start'>
                                <h6>${item?.author?.name}</h6>
                                <p class=''>Date: ${item?.author?.published_date}</p>
                            </div>
                            <div id="viewsAuthor" class = 'flex items-center gap-2 mx-3'>
                                <span class ='text-black'><i class="fa-regular fa-eye"></i></span>
                                <p>${item?.total_view
                                }</p>
                            </div>
                            <div id="detailsBtnContainer" class=''>
                                <button onclick = 'check()' id="detailsBtn" class='btn accent text-white'>Details</button>
                            </div>
                        </div>
                    </div>
                </div>
        `
        newsContainer.appendChild(div)
    })
}
const handleSearch = () =>{
    const value = document.getElementById('searchBox').value
    console.log(value)
    if(value){
      newsData(value)
    }
    else{
      alert('please enter a valid number')
    }
}

const check = () =>{
  console.log('clicked')
}
newsData('08')
loadData(); 


