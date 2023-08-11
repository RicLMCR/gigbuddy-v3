package com.gigbuddy.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class EtAuthException extends RunTimeException{

    public EtAuthException(String message){
        super(message);
    }
}
