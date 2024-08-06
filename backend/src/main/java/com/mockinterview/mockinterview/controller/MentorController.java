package com.mockinterview.mockinterview.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mockinterview.mockinterview.model.Mentor;
import com.mockinterview.mockinterview.service.MentorService;

@RestController
@RequestMapping("/mentors")
public class MentorController {

    @Autowired
    private MentorService mentorService;

    @GetMapping
    public List<Mentor> getAllMentors() {
        return mentorService.getAllMentors();
    }

    @PostMapping
    public Mentor createMentor(@RequestBody Mentor mentor) {
        return mentorService.addMentor(mentor);
    }

    @DeleteMapping("/{id}")
    public void deleteMentor(@PathVariable Long id) {
        mentorService.deleteMentor(id);
    }

    @GetMapping("/department/{dept}")
    public List<Mentor> getMentorsByDept(@PathVariable String dept) {
        return mentorService.getMentorsByDept(dept);
    }

    @GetMapping("/email/{email}")
    public List<Mentor> getMentorsByEmail(@PathVariable String email) {
        return mentorService.getMentorsByEmail(email);
    }

    @GetMapping("/dept/{dept}/class/{classBeingMentored}")
    public List<Mentor> getMentorsByDeptAndClassBeingMentored(@PathVariable String dept, @PathVariable String classBeingMentored) {
        return mentorService.getMentorsByDeptAndClassBeingMentored(dept, classBeingMentored);
    }

    @DeleteMapping("/email/{email}")
    public ResponseEntity<Void> deleteMentorByEmail(@PathVariable String email) {
        System.out.println("Deleting mentor with email: " + email);
        mentorService.deleteMentorByEmail(email);
        return ResponseEntity.noContent().build();
    }
}
