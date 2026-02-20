export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-9 w-9 rounded-xl bg-aura-700/10 ring-1 ring-aura-700/20 flex items-center justify-center">
        <span className="text-aura-800 font-black">SA</span>
      </div>
      <div className="leading-tight">
        <div className="font-extrabold tracking-tight">Spice Aura</div>
        <div className="text-xs text-zinc-600 -mt-0.5">Premium spices & dehydrated ingredients</div>
      </div>
    </div>
  );
}
