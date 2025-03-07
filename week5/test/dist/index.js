"use strict";
function assignGrade(average) {
    if (average >= 90) {
        return 'A';
    }
    else if (average >= 80) {
        return 'B';
    }
    else if (average >= 70) {
        return 'C';
    }
    else if (average >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
}
function calculateAverage(student) {
    const sum = student.scores.korean + student.scores.math + student.scores.society + student.scores.science + student.scores.english;
    return sum / 5;
}
function createStudent(name, age, korean, math, society, science, english) {
    return {
        name,
        age,
        scores: {
            korean,
            math,
            society,
            science,
            english,
        },
    };
}
function printResult(student) {
    const average = calculateAverage(student);
    const grade = assignGrade(average);
    console.log(`학생 이름은 ${student.name}, 나이는 ${student.age}, 등급은 ${grade} 입니다. 평균은 ${average} 입니다.`);
}
const a = createStudent('홍길동', 20, 100, 100, 100, 100, 100);
printResult(a);
