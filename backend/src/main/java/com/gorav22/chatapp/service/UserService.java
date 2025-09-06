package com.gorav22.chatapp.service;

import com.gorav22.chatapp.dto.request.UpdateUserRequestDTO;
import com.gorav22.chatapp.exception.UserException;
import com.gorav22.chatapp.model.User;

import java.util.List;
import java.util.UUID;

public interface UserService {

    User findUserById(UUID id) throws UserException;

    User findUserByProfile(String jwt) throws UserException;

    User updateUser(UUID id, UpdateUserRequestDTO request) throws UserException;

    List<User> searchUser(String query);

    List<User> searchUserByName(String name);

}
