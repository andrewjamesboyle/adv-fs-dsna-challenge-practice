function progressDays(miles) {
    let progressDays = 0

    for (i = 0; i < miles.length; i++) {
        const j = i + 1
        if (miles[j] > miles[i]) {
          progressDays++
        }
    }

    return progressDays

}

console.log(progressDays([1, 2, 3, 4, 5, 6]))