﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transcipher.Algorithms;
using Xunit;

namespace Transcipher.Tests.Algorithms
{
    public class AlgorithmFactoryTests
    {
        IAlgorithmFactory _algorithmFactory = new AlgorithmFactory();

        [Fact]
        public void GetAlgorithms_ShouldReturnValues()
        {
            var algoritms = _algorithmFactory.Get();

            Assert.NotNull(algoritms);
        }

        [Fact]
        public void CreateAlgorithm_NonExisting_ShouldThrowException()
        {
            Assert.Throws<ArgumentException>(() => _algorithmFactory.CreateAlgorithm("fake"));
        }

        [Fact]
        public void CreateAlgorithm_Existing_ShouldCreateInstance()
        {
            var algo = _algorithmFactory.CreateAlgorithm("RSA");
            
            Assert.NotNull(algo);
        }


    }
}
