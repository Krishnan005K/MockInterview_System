package com.mockinterview.mockinterview.service;

import com.mockinterview.mockinterview.model.*;
import com.mockinterview.mockinterview.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class InterviewerService {
    @Autowired
    private InterviewerRepository interviewerRepository;

    @Autowired
    private InterviewRepository interviewRepository;

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private MentorRepository mentorRepository;
    
    @Autowired
    private StudentRepository studentRepository;

    public Interviewer addInterviewer(Interviewer interviewer) {
        return interviewerRepository.save(interviewer);
    }
    
    public Interviewer updateInterviewer(Long id, Interviewer interviewerDetails) {
        Optional<Interviewer> optionalInterviewer = interviewerRepository.findById(id);
        if (optionalInterviewer.isPresent()) {
            Interviewer interviewer = optionalInterviewer.get();
            interviewer.setName(interviewerDetails.getName());
            interviewer.setEmail(interviewerDetails.getEmail());
            interviewer.setPhoto(interviewerDetails.getPhoto());
            interviewer.setPassword(interviewerDetails.getPassword());
            return interviewerRepository.save(interviewer);
        } else {
            return null;
        }
    }

    public void deleteInterviewer(Long id) {
        interviewerRepository.deleteById(id);
    }

    public List<Interviewer> getAllInterviewers() {
        return interviewerRepository.findAll();
    }

    public Optional<Interviewer> getInterviewerById(Long id) {
        return interviewerRepository.findById(id);
    }

    public List<Interviewer> getInterviewersByName(String name) {
        return interviewerRepository.findByName(name);
    }

    public List<Interviewer> getInterviewersByEmail(String email) {
        return interviewerRepository.findByEmail(email);
    }

    public Interview createInterview(Long interviewerId, Interview interview) {
        Optional<Interviewer> optionalInterviewer = interviewerRepository.findById(interviewerId);
        if (optionalInterviewer.isPresent()) {
            interview.setInterviewer(optionalInterviewer.get());
            return interviewRepository.save(interview);
        } else {
            return null;
        }
    }

    public Feedback addFeedback(Long interviewerId, Feedback feedback) {
        Optional<Interviewer> optionalInterviewer = interviewerRepository.findById(interviewerId);
        if (optionalInterviewer.isPresent()) {
            feedback.setInterviewer(optionalInterviewer.get());
            return feedbackRepository.save(feedback);
        } else {
            return null;
        }
    }

    public List<Student> getStudentsByDept(String dept) {
        return studentRepository.findByDept(dept);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public List<Mentor> getAllMentors() {
        return mentorRepository.findAll();
    }
}
