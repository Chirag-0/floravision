function BracketTitle({text=""}) {
  return (
    <div className="text-center">
        <div className="relative inline-block p-2 rounded-lg shadow-lg">
     
      {/* Top-right bracket */}
      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#FBD300] rounded-tr-lg"></div>
      
      {/* Bottom-left bracket */}
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#FFFFFF] rounded-bl-lg"></div>
      
           
      <h2 className="text-3xl inter font-bold text-gray-100 whitespace-nowrap drop-shadow-lg">
        {text}
      </h2>
    </div>
    </div>
  )
}
export default BracketTitle