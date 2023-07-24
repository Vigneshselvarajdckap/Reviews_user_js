// local reviews data

const left = document.querySelector('#chevron-left')
// console.log(left)
const right = document.querySelector('#chevron-right')
// console.log(right)
const randomBtn = document.querySelector('#btn')
// console.log(randomBtn)
const img = document.querySelector('.person-img')
// console.log(img)
const authorName = document.querySelector('.author')
// console.log(authorName)
const jobTitle = document.querySelector('.job')
// console.log(jobTitle)
const information = document.querySelector('.info')
// console.log(information)


const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


let result = -1


right.addEventListener("click",function(){
  result ++
    if(result === 4){
      result = 0
    }
    information.innerText = reviews[result].text
    authorName.innerText = reviews[result].name
   jobTitle.innerText = reviews[result].job
   img.src = reviews[result].img
})



let result2 = 4
left.addEventListener("click",function(){
  result2 --
  if(result2 === -1){
    result2 = 4
  }
  information.innerText = reviews[result2].text
  authorName.innerText = reviews[result2].name
  jobTitle.innerText = reviews[result2].job
  img.src = reviews[result2].img
})


randomBtn.addEventListener("click",function(){
  let Random =  Math.floor(Math.random() * reviews.length);
  information.innerText = reviews[Random].text
  authorName.innerText = reviews[Random].name
  jobTitle.innerText = reviews[Random].job
  img.src = reviews[Random].img
})