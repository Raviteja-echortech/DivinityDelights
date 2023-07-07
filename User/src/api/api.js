export const FoodImages=async()=>{
   try{
      let pic=await fetch(`https://ravi-shiva-api.onrender.com/babycare`)
      let res=await pic.json()
      return res
   }catch(err){
      console.log(err)
   }
   
}