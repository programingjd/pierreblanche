const comparator=(a,b)=>{
  if(a<b) return -1;
  if(a>b) return 1;
  return 0;
}
const routeNumberComparator=(a,b)=>{
  const color=comparator(a.charAt(0),b.charAt(0));
  if(color!==0) return color;
  const n=comparator(parseInt(a.substring(1)),parseInt(b.substring(1)));
  if(n!==0) return n;
  return comparator(a,b);
};
export default routeNumberComparator;
export {comparator};