export function writeCookie(data, time = {s:0,m:0,h:0,d:0}){
    if(time){
        time['s'] = time['s'] ? time['s'] : 0;
        time['m'] = time['m'] ? time['m'] : 0;
        time['h'] = time['h'] ? time['h'] : 0;
        time['d'] = time['d'] ? time['d'] : 0;
    }
    let convertedTime = (1000 * time?.s) * (1000 * 60 * time.m) + (1000 * 3600 * time.h) + (1000 * 3600 * 24 * time.d)
    let now  = new Date();
    let newTime = now.getTime() + convertedTime
    now.setTime(newTime)
    let keys = Object.keys(data)
    for(let k of keys){
        let text = `${k}= ${data[k]}; expires= ${now.toUTCString()}`
        document.cookie = text
    }
    return newTime
}

export function readCookie(){
    let cookies = {username: ''}
    let text = document.cookie
    let fields = text.split(';')
    for(let field of fields){
        let pair = field.split('=')
        let key = pair[0].trim()
        let value = pair[1]
        cookies[key] = value
    }
    return cookies
}

