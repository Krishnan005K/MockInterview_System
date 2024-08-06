package com.mockinterview.mockinterview.controller;

import com.mockinterview.mockinterview.model.Mentor;
import com.mockinterview.mockinterview.model.Student;
import com.mockinterview.mockinterview.service.HeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/heads")
public class HeadController {

    @Autowired
    private HeadService headService;

    // Mentor endpoints
    @PostMapping("/mentors")
    public ResponseEntity<Mentor> addMentor(@RequestBody Mentor mentor) {
        Mentor createdMentor = headService.addMentor(mentor);
        return ResponseEntity.ok(createdMentor);
    }

    // @PutMapping("/mentors/{id}")
    // public ResponseEntity<Mentor> updateMentorById(@PathVariable Long id, @RequestBody Mentor mentorDetails) {
    //     Mentor updatedMentor = headService.updateMentorById(id, mentorDetails);
    //     if (updatedMentor != null) {
    //         return ResponseEntity.ok(updatedMentor);
    //     } else {
    //         return ResponseEntity.notFound().build();
    //     }
    // }

    // @DeleteMapping("/mentors/{id}")
    // public ResponseEntity<Void> deleteMentorById(@PathVariable Long id) {
    //     headService.deleteMentorById(id);
    //     return ResponseEntity.noContent().build();
    // }

    // @GetMapping("/mentors/{id}")
    // public ResponseEntity<Mentor> getMentorById(@PathVariable Long id) {
    //     Mentor mentor = headService.getMentorById(id);
    //     if (mentor != null) {
    //         return ResponseEntity.ok(mentor);
    //     } else {
    //         return ResponseEntity.notFound().build();
    //     }
    // }

    @GetMapping("/mentors/email/{email}")
    public ResponseEntity<Mentor> getMentorByEmail(@PathVariable String email) {
        Mentor mentor = headService.getMentorByEmail(email);
        if (mentor != null) {
            return ResponseEntity.ok(mentor);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint to get mentors by class being mentored
    @GetMapping("/mentors/class/{classBeingMentored}")
    public ResponseEntity<List<Mentor>> getMentorsByClassBeingMentored(@PathVariable String classBeingMentored) {
        List<Mentor> mentors = headService.getMentorsByClassBeingMentored(classBeingMentored);
        return ResponseEntity.ok(mentors);
    }

    // Student endpoints
    @PostMapping("/students")
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        Student createdStudent = headService.addStudent(student);
        return ResponseEntity.ok(createdStudent);
    }

    // @PutMapping("/students/{id}")
    // public ResponseEntity<Student> updateStudentById(@PathVariable Long id, @RequestBody Student studentDetails) {
    //     Student updatedStudent = headService.updateStudentById(id, studentDetails);
    //     if (updatedStudent != null) {
    //         return ResponseEntity.ok(updatedStudent);
    //     } else {
    //         return ResponseEntity.notFound().build();
    //     }
    // }

    @DeleteMapping("/students/{id}")
    public ResponseEntity<Void> deleteStudentById(@PathVariable Long id) {
        headService.deleteStudentById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = headService.getStudentById(id);
        if (student != null) {
            return ResponseEntity.ok(student);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/students/all")
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = headService.getAllStudents();
        return ResponseEntity.ok(students);
    }

    @GetMapping("/mentors/all")
    public ResponseEntity<List<Mentor>> getAllMentors() {
        List<Mentor> mentors = headService.getAllMentors();
        return ResponseEntity.ok(mentors);
    }

    // @GetMapping("/students/{batch}/{dept}/{section}")
    // public ResponseEntity<Student> getStudentByBatchAndDeptAndSection(@PathVariable String batch, @PathVariable String dept, @PathVariable String section) {
    //     Student student = headService.getStudentByBatchAndDeptAndSection(batch, dept, section);
    //     if (student != null) {
    //         return ResponseEntity.ok(student);
    //     } else {
    //         return ResponseEntity.notFound().build();
    //     }
    // }

    @GetMapping("/students/email/{email}")
    public ResponseEntity<Student> getStudentByEmail(@PathVariable String email) {
        Student student = headService.getStudentByEmail(email);
        if (student != null) {
            return ResponseEntity.ok(student);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/students/department/{dept}")
    public ResponseEntity<List<Student>> getStudentsByDept(@PathVariable String dept) {
        List<Student> students = headService.getStudentsByDept(dept);
        return ResponseEntity.ok(students);
    }

    // @GetMapping("/students/mentor/{mentorEmail}")
    // public ResponseEntity<List<Student>> getStudentsByMentorEmail(@PathVariable String mentorEmail) {
    //     List<Student> students = headService.getStudentsByMentorEmail(mentorEmail);
    //     return ResponseEntity.ok(students);
    // }

    // @GetMapping("/students/batch/{batch}")
    // public ResponseEntity<List<Student>> getStudentsByBatch(@PathVariable String batch) {
    //     List<Student> students = headService.getStudentsByBatch(batch);
    //     return ResponseEntity.ok(students);
    // }

    // Statistics endpoints
    @GetMapping("/ratings/students/dept/{dept}/section/{section}")
    public ResponseEntity<Double> getOverallRatingByDepartmentAndSection(
            @PathVariable String dept,
            @PathVariable String section) {
        double rating = headService.getOverallRatingByDepartmentAndSection(dept, section);
        return ResponseEntity.ok(rating);
    }

    @GetMapping("/ratings/class/{classBeingMentored}")
    public ResponseEntity<Double> getOverallRatingByClass(@PathVariable String classBeingMentored) {
        double rating = headService.getOverallRatingByClass(classBeingMentored);
        return ResponseEntity.ok(rating);
    }

    @GetMapping("/ratings/department/{dept}")
    public ResponseEntity<Double> getOverallRatingByDept(@PathVariable String dept) {
        double rating = headService.getOverallRatingByDept(dept);
        return ResponseEntity.ok(rating);
    }

    // @GetMapping("/ratings/batch/{batch}")
    // public ResponseEntity<Double> getOverallRatingByBatch(@PathVariable String batch) {
    //     double rating = headService.getOverallRatingByBatch(batch);
    //     return ResponseEntity.ok(rating);
    // }

    // @GetMapping("/stats/batch/{batch}/department/{dept}/section/{section}")
    // public ResponseEntity<HeadService.BatchDeptSectionStats> getBatchDeptSectionStats(@PathVariable String batch, @PathVariable String dept, @PathVariable String section) {
    //     HeadService.BatchDeptSectionStats stats = headService.getBatchDeptSectionStats(batch, dept, section);
    //     return ResponseEntity.ok(stats);
    // }
}
