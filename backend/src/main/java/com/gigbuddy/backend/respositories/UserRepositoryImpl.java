package com.gigbuddy.backend.respositories;

import com.gigbuddy.backend.exceptions.EtAuthException;
import com.gigbuddy.backend.services.UserService;

public class UserRepositoryImpl implements UserService {
    @Override
    public User validateUser(String email, String password) throws EtAuthException {
        return null;
    }

    @Override
    public User registerUser(String firstName, String lastName, String email, String password) throws EtAuthException {
        return null;
    }
}
