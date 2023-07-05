export const FoodImages=async()=>{
   let pic=await fetch(`https://ravi-shiva-api.onrender.com/babycare`)
   let res=await pic.json()
   return res
}