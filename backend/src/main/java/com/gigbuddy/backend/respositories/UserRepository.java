package com.gigbuddy.backend.respositories;

import com.gigbuddy.backend.exceptions.EtAuthException;
import org.apache.catalina.User;

public interface UserRespository {
    Integer create(String firstName, String lastName, String email, String password) throws EtAuthException {
        return null;
    }

    User findByEmailAndPassword(String email, String password) throws EtAuthException {
        return null;
    }

    Integer getCountByEmail(String email) {
        return null;
    }

    User findById(Integer userId) {
        return null;
    }
}
