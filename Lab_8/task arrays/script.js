                let array1 = [3, 8, 15, 15, 22, 37, 15];
                let array2 = [5, 15, 18, 15, 22];
                
                console.log(array1);
                console.log(array2);
                
                function arrayDiff(arr1, arr2) {
                    let result = [...arr1]; // копіюємо масив 
                
                    for (let i = 0; i < arr2.length; i++) {
                        let elem = arr2[i]; // пам'ять для збереження індекса елемента масиву
                        let index = result.indexOf(elem); // Знах. індекс елемента з мас. arr2 у result
                        if (index !== -1) {
                            result.splice(index, 1); // Видалення знайдений елемента з result
                        }
                    }
                
                    return result; 
                }
                
                let result = arrayDiff(array1, array2);
                console.log(result, "Новий масив");