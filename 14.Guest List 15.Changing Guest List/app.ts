let guest_list: string [] = ['shehnaz','farah','mehnaz','kanwal'];
for(let i=0; i<guest_list.length; i ++){
    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
}
let not_present: string = 'mehnaz';
let new_guest: string ='khubi';
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i ++){
    console.log('Respected Madam ' + guest_list[i] +',\nWe invited you on dinner tomorrow.\nThank You\n')
}
console.log(`Miss. ${not_present} will not come on dinner tomorrow. `)
export{guest_list}