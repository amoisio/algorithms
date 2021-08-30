# Round 1

## Analysis of algorithms

Big-O notation: 
- f(n) = O(g(n)) if for some c, n0 it holds that f(n) <= cg(n), for all n > n0. "f grows at most as fast as g".
- f(n) = Omega(g(n)), if g(n) = O(f(n)). "f grows at least as fast as g".
- f(n) = Theta(g(n)), if f(n) = O(g(n)) and g(n) = O(f(n)). "f grows at the same rate as g".

Little-o notation:
- f(n) = o(g(n)) if for _every_ c > 0 these exists n0 such that f(n) <= cg(n) when n > n0. "f grows slower than g".

O(1) - constant
O(n) - linear
O(log n) - logarithmic
O(n log n) - linearithmic
O(n^2) - quadratic
O(n^3) - cubic
O(n^k) - polynomial (k >= 0 )
O(c^n) - exponential (c > 1)
O(n!) - factorial 

## Running times of algorithms

(i) Definition
The worst-case running time of a program/algorithm is O(f(n)) if g(n) = O(f(n)), 
where the function g(n) is obtained by taking, for each n, the longest running 
time of any input of size n.