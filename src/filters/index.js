
import moment from "moment";

export default {
    dateFrm(el, formatString) {
        // console.log(el)
        formatString = formatString || "YYYY-MM-DD HH:mm:ss";
        return moment(el).format(formatString);
    }
}