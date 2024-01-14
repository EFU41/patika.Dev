# Selection-Insertion-Sort

### Selection Sort

#### Soru 1)

```
                                   [7,3,5,8,2,9,4,15,6]
```

dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

```
Answer:
    Step 1: [2,3,5,8,7,9,4,15,6]
    Step 2: [2,3,4,8,7,9,5,15,6]
    Step 3: [2,3,4,5,7,9,8,15,6]
    Step 4: [2,3,4,5,6,9,8,15,7]

    Step 5: [2,3,4,5,6,7,8,15,9]
    Step 6: [2,3,4,5,6,7,8,9,15]
```

### Insertion Sort

#### Soru 2)

```
                                   [22,27,16,2,18,6]
```

##### a) Yukarıde verilen dizinin Insertion Sort türüne göre aşamalarını yazınız.

```
Answer a:
   Step 1: [22,27,16,2,18,6]   // 22 zaten 27'den küçük olduğu için hiç bir sıralama yapılmadı
   Step 2: [22,16,27,2,18,6]   // 27 ile 16 yer değişti
   Step 3: [16,22,27,2,18,6]   // 22 ile 16 yer değişti
   Step 4: [16,22,2,27,18,6]   // 27 ile 2 yer değişti
   Step 5: [16,2,22,27,18,6]   // 22 ile 2 yer değişti
   Step 6: [2,16,22,27,18,6]   // 16 ile 2 yer değişti
   Step 7: [2,16,22,18,27,6]   // 27 ile 18 yer değişti
   Step 8: [2,16,18,22,27,6]   // 22 ile 18 yer değişti
   Step 9: [2,16,18,22,6,27]   // 27 ile 6 yer değişti
   Step 10: [2,16,18,6,22,27]  // 22 ile 6 yer değişti
   Step 11: [2,16,6,18,22,27]  // 18 ile 6 yer değişti
   Step 12: [2,6,16,18,22,27]  // 16 ile 6 yer değişti
```

##### b) Big-O gösterimini yazınız.

```
Answer b:
                             O(n^2)
```

##### c) Time Comlexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız.

    1. Average Case: Aranan sayının ortada olması
    2. Worst Case: Aranan sayının sonda olması
    3. Best Case: Aranan sayının dizinin en başında olması

```
Answer c:
                             Average Case
```

# Merge Sort

#### Soru 1)

```
                            [16,21,11,8,12,22]
```

#### a) Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

```
Answer a:

Step 1:               [16,21,11]                             [8,12,22]
                    /           \                         /           \
Step 2:          [16,21]    -    [11]                  [8,12]    -    [22]
                /        \             \               /      \            \
Step 3:      [16]    -    [21]    -    [11]        [8]     -    [12]    -    [22]
                \       /              /             \         /            /
Step 4:          [16,21]    -    [11]                  [8,12]    -    [22]
                     \            /                        \           /
Step 5:                [11,16,21]                            [8,12,22]

Step 6:                               [8,11,12,16,21,22]
```

#### b) Big-O gösterimini yazınız.

```
Answer b:
                                 O(nlogn)
```

# Binary Search Tree

#### Soru 1)

```
[7,5,1,8,3,6,0,9,4,2]
```

dizisinin Binary Search Tree aşamalarını yazınız.
Örnek: root x'dir. Root'un sağından y bulunur. Solunda z bulunur vb.

```
Answer:

Root x = 6
                             6
                           /   \
                          5     7
                        /         \
                       1           8
                     /   \           \
                    0     3           9
                        /   \
                       2     4

Step 1:     7 > 6 için root'un sağında 7 bulunur.
Step 2:     5 < 6 için root'un solunda 5 bulunur.
Step 3:     1 < 6 için 1 root'un soluna eklenir.
Step 4:     8 > 6 için 8 root'un sağına eklenir.
Step 5:     3 < 6 için 3 root'un soluna eklenir.
Step 6:     0 < 6 için 0 root'un soluna eklenir.
Step 7:     9 > 6 için 9 root'un sağına eklenir.
Step 8:     4 < 6 için 4 root'un soluna eklenir.
Step 9:     2 < 6 için 2 root'un soluna eklenir.
```
