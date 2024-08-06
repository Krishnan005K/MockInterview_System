// Student.java
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
public class Student extends User {
    private String contact;
    private Double ratings;
    private String dept;
    private String batch;
    private String section;
    private String registerNo;

    @ManyToOne
    @JoinColumn(name = "mentorId")
    private Mentor mentor;

    @OneToMany(mappedBy = "student")
    private List<Feedback> feedbacks;

    @OneToMany(mappedBy = "student")
    private List<Interview> interviews;
}
