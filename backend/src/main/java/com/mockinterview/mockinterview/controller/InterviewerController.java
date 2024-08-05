package com.mockinterview.mockinterview.controller;

import com.mockinterview.mockinterview.model.*;
import com.mockinterview.mockinterview.service.InterviewerService;
import com.mockinterview.mockinterview.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/interviewers")
public class InterviewerController {
    @Autowired
    private InterviewerService interviewerService;

    @Autowired
    private StudentService studentService;

    @PostMapping
    public Interviewer addInterviewer(@RequestBody Interviewer interviewer) {
        return interviewerService.addInterviewer(interviewer);
    }

    @PutMapping("/{id}")
    public Interviewer updateInterviewer(@PathVariable Long id, @RequestBody Interviewer interviewerDetails) {
        return interviewerService.updateInterviewer(id, interviewerDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteInterviewer(@PathVariable Long id) {
        interviewerService.deleteInterviewer(id);
    }

    @GetMapping
    public List<Interviewer> getAllInterviewers() {
        return interviewerService.getAllInterviewers();
    }

    @GetMapping("/{id}")
    public Optional<Interviewer> getInterviewerById(@PathVariable Long id) {
        return interviewerService.getInterviewerById(id);
    }

    @PostMapping("/{interviewerId}/interviews")
    public Interview createInterview(@PathVariable Long interviewerId, @RequestBody Interview interview) {
        return interviewerService.createInterview(interviewerId, interview);
    }

    @PostMapping("/{interviewerId}/feedbacks")
    public Feedback addFeedback(@PathVariable Long interviewerId, @RequestBody Feedback feedback) {
        return interviewerService.addFeedback(interviewerId, feedback);
    }

    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return interviewerService.getAllStudents();
    }

    @GetMapping("/dept/{dept}/section/{section}")
    public List<Student> getStudentsByDeptAndSection(@PathVariable String dept, @PathVariable String section) {
        return studentService.getStudentsByDeptAndSection(dept, section);
    }

    @GetMapping("/students/dept/{dept}")
    public List<Student> getStudentsByDept(@PathVariable String dept) {
        return interviewerService.getStudentsByDept(dept);
    }

    @GetMapping("/mentors")
    public List<Mentor> getAllMentors() {
        return interviewerService.getAllMentors();
    }
}
