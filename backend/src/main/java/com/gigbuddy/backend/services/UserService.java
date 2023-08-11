package com.gigbuddy.backend.services;

import com.gigbuddy.backend.exceptions.EtAuthException;


public interface UserService {
    User validateUser(String email, String password) throws EtAuthException;

    User registerUser(String firstName, String lastName, String email, String password) throws EtAuthException;
}
