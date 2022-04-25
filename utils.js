export default function truncateAddress(address) {
  // console.log(address.slice(0, 4) + address.slice(address.length-5, address.length-1));
  return address.slice(0, 5) + '...' + address.slice(address.length - 4, address.length);
}
