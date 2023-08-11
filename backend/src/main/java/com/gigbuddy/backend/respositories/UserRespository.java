package com.gigbuddy.backend.respositories;

import com.gigbuddy.backend.exceptions.EtAuthException;

public class UserRespository {
    Integer create(String firstName, String lastName, String email, String password) throws EtAuthException;

    User findByEmailAndPassword(String email, String password) throws EtAuthException;
}
