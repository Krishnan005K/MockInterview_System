package com.mockinterview.mockinterview.controller;

import com.mockinterview.mockinterview.model.Interview;
import com.mockinterview.mockinterview.service.InterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;

@RestController
@RequestMapping("/api/interviews")
public class InterviewController {
    @Autowired
    private InterviewService interviewService;

    @PostMapping
    public ResponseEntity<Interview> addInterview(@RequestBody Interview interview) {
        return ResponseEntity.ok(interviewService.addInterview(interview));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInterview(@PathVariable Long id) {
        interviewService.deleteInterview(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/title/{title}")
    public ResponseEntity<List<Interview>> getInterviewsByTitle(@PathVariable String title) {
        return ResponseEntity.ok(interviewService.getInterviewsByTitle(title));
    }

    @GetMapping("/roundname/{roundname}")
    public ResponseEntity<List<Interview>> getInterviewsByRoundName(@PathVariable String roundname) {
        return ResponseEntity.ok(interviewService.getInterviewsByRoundName(roundname));
    }

    @GetMapping("/upcoming")
    public ResponseEntity<List<Interview>> getUpcomingInterviews() {
        return ResponseEntity.ok(interviewService.getUpcomingInterviews(LocalDate.now()));
    }

    @GetMapping("/student/{studentId}")
    public ResponseEntity<List<Interview>> getInterviewsByStudentId(@PathVariable Long studentId) {
        return ResponseEntity.ok(interviewService.getInterviewsByStudentId(studentId));
    }

    @GetMapping("/interviewer/{interviewerId}")
    public ResponseEntity<List<Interview>> getInterviewsByInterviewerId(@PathVariable Long interviewerId) {
        return ResponseEntity.ok(interviewService.getInterviewsByInterviewerId(interviewerId));
    }

    // New endpoints
    @GetMapping
    public ResponseEntity<List<Interview>> getAllInterviews() {
        return ResponseEntity.ok(interviewService.getAllInterviews());
    }

    @GetMapping("/time/{scheduleTime}")
    public ResponseEntity<List<Interview>> getInterviewsByScheduleTime(@PathVariable String scheduleTime) {
        try {
            LocalTime localTime = parseCustomTimeFormat(scheduleTime);
            return ResponseEntity.ok(interviewService.getInterviewsByScheduleTime(localTime));
        } catch (DateTimeParseException e) {
            return ResponseEntity.badRequest().body(null); // Handle the error appropriately
        }
    }

    // Utility method to parse custom time format
    private LocalTime parseCustomTimeFormat(String time) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
        return LocalTime.parse(time, formatter);
    }

    @PutMapping("/scheduled-date/{date}")
    public ResponseEntity<Interview> updateInterviewByDate(@PathVariable String date, @RequestBody Interview interviewDetails) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate localDate = LocalDate.parse(date, formatter);
        Interview updatedInterview = interviewService.updateInterviewByDate(localDate, interviewDetails);
        if (updatedInterview != null) {
            return ResponseEntity.ok(updatedInterview);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/roundname/{roundname}")
    public ResponseEntity<Interview> updateInterviewByRoundName(@PathVariable String roundname, @RequestBody Interview interviewDetails) {
        Interview updatedInterview = interviewService.updateInterviewByRoundName(roundname, interviewDetails);
        if (updatedInterview != null) {
            return ResponseEntity.ok(updatedInterview);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/roundname/{roundname}")
    public ResponseEntity<Void> deleteInterviewsByRoundName(@PathVariable String roundname) {
        interviewService.deleteInterviewsByRoundName(roundname);
        return ResponseEntity.noContent().build();
    }
}