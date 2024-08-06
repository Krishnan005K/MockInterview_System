// Mentor.java
package com.mockinterview.mockinterview.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Mentor extends User {
    private String contact;
    private String dept;
    private String classBeingMentored;

    @ManyToOne
    @JoinColumn(name = "head_id")
    private Head head;

    @OneToMany(mappedBy = "mentor")
    private List<Student> students;
}
