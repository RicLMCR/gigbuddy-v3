package com.gigbuddy.backend.services;

import com.gigbuddy.backend.exceptions.EtAuthException;
import com.gigbuddy.backend.respositories.UserRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRespository userRepository;

    @Override
    public User validateUser(String email, String password) throws EtAuthException {
        return null;
    }

    @Override
    public User registerUser(String firstName, String lastName, String email, String password) throws EtAuthException {
    Pattern pattern = Pattern.compile("^(.+)@(.+)$");
    if(email != null) email = email.toLowerCase();
    if(!pattern.matcher(email).matches())
        throw new EtAuthException("Invalid email format");
    Integer count = userRepository.getCountByEmail(email);
    if(count > 0)
        throw new EtAuthException("Email already in use");
    Integer userId = userRepository.create(firstName, lastName, email, password);
    return userRepository.findById(userId);
    }
}
