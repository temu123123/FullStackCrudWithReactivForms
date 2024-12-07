package com.temu.userBackForAngular.sevices;

import com.temu.userBackForAngular.entity.User;
import com.temu.userBackForAngular.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    public UserRepository userRepository;

    public User createUser(User user){
        return userRepository.save(user);
    }

    public User getUserById(Long id){
        return  userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Error while getting by id" + id));
    }

    public User updateUser(User user){
        return userRepository.save(user);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public void deleteUser(User user){
        userRepository.delete(user);
    }

}
