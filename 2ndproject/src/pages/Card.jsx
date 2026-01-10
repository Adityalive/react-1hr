import React from 'react';

const Card = ({ imageurl, username, role, description ,allusers}) => {
    const deleteHandler=()=>{
const copy=[...allusers];
copy.splice(Index,1);
setAllusers(copy);
        console.log("deleted");
    }

  return (
    <div className="w-1/4 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex  items-center text-center">
      {/* Larger Circular Image */}
      <div className="mb-6">
        <img 
          className="w-28 h-28 rounded-full object-cover border-4 border-blue-50" 
          src={imageurl} 
          alt={username} 
        />
      </div>

      {/* User Details */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900 leading-tight">
          {username}
        </h2>
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
          {role}
        </p>
        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
          {description}
        </p>
<button onClick={()=>{
    deleteHandler()
}} className="bg-red-300 text-black active:scale-95 rounded-2xl text-base p-2 border border-amber-950 font-bold">
  Delete It
</button>      </div>
    </div>
  );
};

export default Card;