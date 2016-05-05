var Model = require('./model');

function AjaxModel(){
    Model.call(this);
}

AjaxModel.prototype = Object.create(Model.prototype);

AjaxModel.send = function(method,url,data,contentType,additionalHeaders){
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
                if(data instanceof Rad.Model){
                    data = data.serialize();
                }
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

AjaxModel.post = function(url,data,contentType,additionalHeaders){
    return AjaxModel.send('POST',url,data,contentType,additionalHeaders);
};

AjaxModel.get = function(url,data,contentType,additionalHeaders){
    return AjaxModel.send('GET',url,data,contentType,additionalHeaders);
};

AjaxModel.put = function(url,data,contentType,additionalHeaders){
    return AjaxModel.send('PUT',url,data,contentType,additionalHeaders);
};

AjaxModel.delete = function(url,data,contentType,additionalHeaders){
    return AjaxModel.send('DELETE',url,data,contentType,additionalHeaders);
};

AjaxModel.prototype.send = AjaxModel.send;
AjaxModel.prototype.post = AjaxModel.post;
AjaxModel.prototype.get = AjaxModel.get;
AjaxModel.prototype.put = AjaxModel.put;
AjaxModel.prototype.delete = AjaxModel.delete;

module.exports = AjaxModel;
