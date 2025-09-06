package com.gorav22.chatapp.service;

import com.gorav22.chatapp.dto.request.SendMessageRequestDTO;
import com.gorav22.chatapp.exception.ChatException;
import com.gorav22.chatapp.exception.MessageException;
import com.gorav22.chatapp.exception.UserException;
import com.gorav22.chatapp.model.Message;
import com.gorav22.chatapp.model.User;

import java.util.List;
import java.util.UUID;

public interface MessageService {

    Message sendMessage(SendMessageRequestDTO req, UUID userId) throws UserException, ChatException;

    List<Message> getChatMessages(UUID chatId, User reqUser) throws UserException, ChatException;

    Message findMessageById(UUID messageId) throws MessageException;

    void deleteMessageById(UUID messageId, User reqUser) throws UserException, MessageException;

}
