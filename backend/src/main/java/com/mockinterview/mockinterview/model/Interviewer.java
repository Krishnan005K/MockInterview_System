// Interviewer.java
package com.mockinterview.mockinterview.model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Interviewer extends User {
    @OneToMany(mappedBy = "interviewer")
    private List<Feedback> feedbacks;

    @OneToMany(mappedBy = "interviewer")
    private List<Interview> interviews;
}
