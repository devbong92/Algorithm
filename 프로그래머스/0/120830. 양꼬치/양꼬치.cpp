#include <string>
#include <vector>

using namespace std;

int solution(int n, int k) {
    int LAMB_SKEWER = 12000;
    int DRINK = 2000;
    int answer = (LAMB_SKEWER * n) + (DRINK * (k - (n / 10)) );
    return answer;
}