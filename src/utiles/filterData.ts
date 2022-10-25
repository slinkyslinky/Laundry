export default function filterData(data: [], item: string | number, param: string) {
   if (data) {

      const filtered = data.filter((obj: any) => obj[param] === item)



      return filtered
   }
   else return ''
}