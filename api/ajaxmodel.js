/*global ActiveXObject*/

function AjaxModel(){

}

AjaxModel.prototype.send = function(method,url,data,contentType,additionalHeaders){
    return new Promise(function(resolve,reject){
        try{
            if(typeof contentType === 'undefined'){
                contentType = 'application/json; charset=utf-8';
            }
            if(typeof additionalHeaders === 'undefined'){
                additionalHeaders = [];
            }
            var req = XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject('Microsoft.XMLHTTP');
            req.open(method,url,true);
            req.setRequestHeader('content-type',contentType);
            for(var i = 0; i < additionalHeaders.length;i++){
                req.setRequestHeader(additionalHeaders[i].key,additionalHeaders[i].value);
            }
            if(contentType.substring(0,16) === 'application/json'){
                req.send(JSON.stringify(data));
            }
            else{
                if(data){
                    req.send(data);
                }
                else{
                    req.send();
                }
            }
            req.onreadystatechange = function () {
                if(req.readyState === 4){
                    if(req.status === 200){
                        var respContentType = req.getResponseHeader('content-type');
                        if(respContentType.length >= 16 && contentType.toLowerCase().substring(0,16) === 'application/json'){
                            resolve(JSON.parse(req.responseText));
                        }
                        else{
                            resolve(req.responseText);
                        }
                    }
                    else{
                        reject(req.responseText);
                    }
                }
            };
        }
        catch(e){
            reject(e);
        }
    });
};


AjaxModel.prototype.post = function(url,data,contentType,additionalHeaders){
    return this.send('POST',url,data,contentType,additionalHeaders);
};

AjaxModel.prototype.get = function(url,data,contentType,additionalHeaders){
    return this.send('GET',url,data,contentType,additionalHeaders);
};

AjaxModel.prototype.put = function(url,data,contentType,additionalHeaders){
    return this.send('PUT',url,data,contentType,additionalHeaders);
};

AjaxModel.prototype.delete = function(url,data,contentType,additionalHeaders){
    return this.send('DELETE',url,data,contentType,additionalHeaders);
};

module.exports = AjaxModel;
