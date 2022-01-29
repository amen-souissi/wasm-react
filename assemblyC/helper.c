#include <emscripten/emscripten.h>
#include <stdlib.h>

float test(int i)
{
    return (i * 2) / 4;
}

EMSCRIPTEN_KEEPALIVE float *helper()
{
    float result[ 1000000 ];

    for (unsigned int i = 0; i < 1000000; i++)
    {
        result[i] = test(i);
    }

    return result;
}
