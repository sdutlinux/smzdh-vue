/**
 * Created by darknessomi on 16/8/26.
 */
export default {
    bind () {

    },
    update () {
        this.el.innerHTML = new Date();
        this.timeout = setInterval(() => {
            this.el.innerHTML = new Date();
        })
    },
    unbind () {
        clearInterval(this.timeout);
    }
};