// path/logger.ts
export class StringUtils {

   static stringFormat (format:any,args:any[]) {
            
            return format.replace(/{(\d+)}/g, function (match:any, number:any) {
                return typeof args[number] != 'undefined'
                  ? args[number]
                  : match
                ;
            });
        }
}