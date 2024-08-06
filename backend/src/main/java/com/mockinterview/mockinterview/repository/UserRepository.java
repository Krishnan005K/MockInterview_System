package com.mockinterview.mockinterview.repository;

import com.mockinterview.mockinterview.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
