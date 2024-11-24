const loadData = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`
  );
  const data = await response.json();
  const allData = data.data.news_category
  console.log(allData)
  const newsCategoryContainer = document.getElementById('newsCategoryContainer')
  allData.forEach((item) =>{
    console.log(item)
    const div = document.createElement('div')
    div.classList = 'hover:text-[#0d0f99]'
    div.innerHTML = `
    <button>${item.category_name}</button>
    `
    newsCategoryContainer.appendChild(div)
  })
};
loadData();
